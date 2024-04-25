import db from "../models/index";
const { Op } = require("sequelize");

const readProduct = async () => {
  try {
    let data = await db.Product.findAll({
      attributes: ["id", "title", "price", "version", "quantity", "imageAvatar", "imageDetail", "colors", "percentDiscount", "slug", "categoriesId",],
      order: [["title", "ASC"]],
      include: [{ model: db.Categories, attributes: ["id", "name", "description"] }],
    });
    return { EM: "Read product success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};
const readProductWithCategories = async (page, limit, categories) => {
  try {
    const isFindCategories = await db.Categories.findOne({
      attributes: ["id", "name", "description"],
      where: { description: categories },
    });
    if (isFindCategories) {
      let offset = (page - 1) * limit;
      let { count, rows } = await db.Product.findAndCountAll({
        where: { categoriesId: isFindCategories.id },
        offset: offset,
        limit: limit,
        attributes: ["id", "title", "price", "version", "quantity", "imageAvatar", "imageDetail", "colors", "percentDiscount", "slug", "categoriesId",],
        order: [["title", "ASC"]],
        include: [{ model: db.Categories, attributes: ["id", "name", "description"] }],
      });
      const totalPages = Math.ceil(count / limit);
      let data = { totalRows: count, totalPages: totalPages, products: rows, };
      return { EM: "Read product success", EC: 0, DT: data, };
    }
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};
const readProductWithSearch = async (page, limit, search) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Product.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "title", "price", "version", "quantity", "imageAvatar", "imageDetail", "colors", "percentDiscount", "slug", "categoriesId",],
      order: [["title", "ASC"]],
      where: { [Op.or]: { title: { [Op.like]: `%${search}%`, }, }, },
      include: [{ model: db.Categories, attributes: ["id", "name", "description"] }],
    });
    const totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, products: rows, };
    return { EM: "Read product success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};
const readProductWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Product.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "title", "price", "version", "quantity", "imageAvatar", "imageDetail", "colors", "percentDiscount", "slug", "categoriesId",],
      order: [["title", "ASC"]],
      include: [{ model: db.Categories, attributes: ["id", "name", "description"] }],
    });
    const totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, products: rows, };
    return { EM: "Read product success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const readProductId = async (id) => {
  try {
    let data = await db.Product.findOne({
      attributes: ["id", "title", "price", "version", "quantity", "imageAvatar", "imageDetail", "colors", "percentDiscount", "slug", "categoriesId",],
      include: [{ model: db.Categories, attributes: ["id", "name", "description"] }],
      where: { id: id },
    });
    return { EM: "Read product success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const readProductDetail = async (slug) => {
  try {
    let data = await db.Product.findOne({
      where: { slug: slug },
      attributes: ["id", "title", "price", "version", "quantity", "imageAvatar", "imageDetail", "colors", "percentDiscount", "slug", "categoriesId",],
      order: [["title", "ASC"]],
      include: [{ model: db.Categories, attributes: ["id", "name", "description"] }],
    });
    return { EM: "Read product success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const createProduct = async (data) => {
  try {
    await db.Product.create({
      title: data.title,
      price: data.price,
      version: data.version,
      quantity: data.quantity,
      imageAvatar: data.imageAvatar,
      imageDetail: data.imageDetail,
      colors: data.colors,
      percentDiscount: data.percentDiscount,
      categoriesId: data.categoriesId,
    });
    return { EM: "A product is created successfully!", EC: 0, DT: [], };
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const updateProduct = async (data) => {
  try {
    let isProduct = await db.Product.findOne({ where: { id: data.id, }, attributes: ["id", "title", "categoriesId",], });
    if (isProduct) {
      if (data.imageAvatar.length > 0 && data.imageDetail.length) {
        await isProduct.update({
          title: data.title,
          price: data.price,
          version: data.version,
          quantity: data.quantity,
          imageAvatar: data.imageAvatar,
          imageDetail: data.imageDetail,
          colors: data.colors,
          percentDiscount: data.percentDiscount,
          categoriesId: data.categoriesId,
        });
        return { EM: "Update product success", EC: 0, DT: [], };
      } else if (data.imageAvatar.length > 0) {
        await isProduct.update({
          title: data.title,
          price: data.price,
          version: data.version,
          quantity: data.quantity,
          imageAvatar: data.imageAvatar,
          colors: data.colors,
          percentDiscount: data.percentDiscount,
          categoriesId: data.categoriesId,
        });
        return { EM: "Update product success", EC: 0, DT: [], };
      } else if (data.imageDetail.length > 0) {
        await isProduct.update({
          title: data.title,
          price: data.price,
          version: data.version,
          quantity: data.quantity,
          imageDetail: data.imageDetail,
          colors: data.colors,
          percentDiscount: data.percentDiscount,
          categoriesId: data.categoriesId,
        });
        return { EM: "Update product success", EC: 0, DT: [], };
      } else {
        await isProduct.update({
          title: data.title,
          price: data.price,
          version: data.version,
          quantity: data.quantity,
          colors: data.colors,
          percentDiscount: data.percentDiscount,
          categoriesId: data.categoriesId,
        });
        return { EM: "Update product success", EC: 0, DT: [], };
      }
    } else {
      return { EM: "Product not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const deleteProduct = async (id) => {
  try {
    let isProduct = await db.Product.findOne({ where: { id: id, }, attributes: ["id", "title", "categoriesId",], });
    if (isProduct) {
      await isProduct.destroy();
      return { EM: "Delete product success", EC: 0, DT: [], };
    } else {
      return { EM: "Product not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

module.exports = {
  readProduct,
  readProductWithCategories,
  readProductWithSearch,
  readProductWithPagination,
  readProductDetail,
  readProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
