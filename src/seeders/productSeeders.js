"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Product",
      [
        {
          title: "Iphone 7",
          price: 5990000,
          version: "7",
          quantity: 10,
          imageAvatar:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776924/blueprint_image_avatar/fcxbcf1xrzbrawtliteu.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776926/blueprint_image_avatar/szwohq4bot3pbozo0gpi.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776928/blueprint_image_avatar/c7dlmb3elxbdluwdnzss.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_avatar/tbyxcdgmhui8lf1vv8fp.png"]',
          imageDetail:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_detail/cq5zcvypv9vs0hlou2vj.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776931/blueprint_image_detail/seyrfefbo8g1qn9dluhd.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776932/blueprint_image_detail/j4qi55qbdqkmqwxwoukl.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776933/blueprint_image_detail/enk42nmhlzp6sbcbxyzb.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776934/blueprint_image_detail/pvtne8pz7wlfro03zmk3.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776936/blueprint_image_detail/jdcjtmqw2tdbaxwm3gny.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776937/blueprint_image_detail/meia8nphlmgstt6vkd3k.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776939/blueprint_image_detail/zhofsd2ktd3ub6q9xe2s.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776940/blueprint_image_detail/zr1ofohgfpimbcr814ok.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776941/blueprint_image_detail/goonxjckwdenciag6vuz.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776941/blueprint_image_detail/ewofkoplowsfofqljsc5.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776942/blueprint_image_detail/i9lhqkw4wstioxli5tfl.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776943/blueprint_image_detail/t5gurh7afgn2lmfrk5of.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776944/blueprint_image_detail/dfgr7czla0rrjc79rcd5.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776945/blueprint_image_detail/avplyri3mat39nsacrc9.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776945/blueprint_image_detail/emhn0i4antaus5jeflzk.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776946/blueprint_image_detail/x0l4oordwj0qjgaoy3v6.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776947/blueprint_image_detail/kn3wbbve8vaeazsr2onv.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776948/blueprint_image_detail/hyo3tqyh3agkvs7x8npb.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776949/blueprint_image_detail/gl1rvso3aut6obckovp9.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776949/blueprint_image_detail/evy76vv3dnxm8gu2sapw.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776950/blueprint_image_detail/jjpmrpr6c98odniszhdc.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776951/blueprint_image_detail/jikvp7t9qtoxgmv5u64q.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776952/blueprint_image_detail/s06xzpifl79zf3aw2ol6.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776953/blueprint_image_detail/qexgzikewja01juiiqca.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776953/blueprint_image_detail/lpurjaiceta7i3wgh8iy.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776954/blueprint_image_detail/ckhlddhaheqhfjyligpo.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776957/blueprint_image_detail/b9srbmqg2af3ic5s05r8.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776958/blueprint_image_detail/sboeqz3dbw3qqm92tjpw.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776959/blueprint_image_detail/g4h0fplpb2yvns0uyjjk.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776960/blueprint_image_detail/pvrbdpilowiw9fsvtuxv.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776960/blueprint_image_detail/hvnkbauhbehbj3y6ctfp.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776961/blueprint_image_detail/qhusx3kymzwrzxdrde7u.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776962/blueprint_image_detail/xhi0d4q6iwcjcunj1qnc.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776963/blueprint_image_detail/i5lsz0sjhsp9c0unjsmw.jpg"]',
          colors: '["red","black"]',
          percentDiscount: 10,
          slug: "iphone-7",
          categoriesId: 1,
        },
        {
          title: "Iphone 7",
          price: 5990000,
          version: "7",
          quantity: 10,
          imageAvatar:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776924/blueprint_image_avatar/fcxbcf1xrzbrawtliteu.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776926/blueprint_image_avatar/szwohq4bot3pbozo0gpi.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776928/blueprint_image_avatar/c7dlmb3elxbdluwdnzss.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_avatar/tbyxcdgmhui8lf1vv8fp.png"]',
          imageDetail:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_detail/cq5zcvypv9vs0hlou2vj.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776931/blueprint_image_detail/seyrfefbo8g1qn9dluhd.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776932/blueprint_image_detail/j4qi55qbdqkmqwxwoukl.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776933/blueprint_image_detail/enk42nmhlzp6sbcbxyzb.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776934/blueprint_image_detail/pvtne8pz7wlfro03zmk3.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776936/blueprint_image_detail/jdcjtmqw2tdbaxwm3gny.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776937/blueprint_image_detail/meia8nphlmgstt6vkd3k.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776939/blueprint_image_detail/zhofsd2ktd3ub6q9xe2s.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776940/blueprint_image_detail/zr1ofohgfpimbcr814ok.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776941/blueprint_image_detail/goonxjckwdenciag6vuz.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776941/blueprint_image_detail/ewofkoplowsfofqljsc5.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776942/blueprint_image_detail/i9lhqkw4wstioxli5tfl.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776943/blueprint_image_detail/t5gurh7afgn2lmfrk5of.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776944/blueprint_image_detail/dfgr7czla0rrjc79rcd5.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776945/blueprint_image_detail/avplyri3mat39nsacrc9.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776945/blueprint_image_detail/emhn0i4antaus5jeflzk.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776946/blueprint_image_detail/x0l4oordwj0qjgaoy3v6.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776947/blueprint_image_detail/kn3wbbve8vaeazsr2onv.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776948/blueprint_image_detail/hyo3tqyh3agkvs7x8npb.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776949/blueprint_image_detail/gl1rvso3aut6obckovp9.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776949/blueprint_image_detail/evy76vv3dnxm8gu2sapw.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776950/blueprint_image_detail/jjpmrpr6c98odniszhdc.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776951/blueprint_image_detail/jikvp7t9qtoxgmv5u64q.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776952/blueprint_image_detail/s06xzpifl79zf3aw2ol6.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776953/blueprint_image_detail/qexgzikewja01juiiqca.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776953/blueprint_image_detail/lpurjaiceta7i3wgh8iy.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776954/blueprint_image_detail/ckhlddhaheqhfjyligpo.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776957/blueprint_image_detail/b9srbmqg2af3ic5s05r8.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776958/blueprint_image_detail/sboeqz3dbw3qqm92tjpw.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776959/blueprint_image_detail/g4h0fplpb2yvns0uyjjk.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776960/blueprint_image_detail/pvrbdpilowiw9fsvtuxv.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776960/blueprint_image_detail/hvnkbauhbehbj3y6ctfp.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776961/blueprint_image_detail/qhusx3kymzwrzxdrde7u.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776962/blueprint_image_detail/xhi0d4q6iwcjcunj1qnc.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776963/blueprint_image_detail/i5lsz0sjhsp9c0unjsmw.jpg"]',
          colors: '["red","black"]',
          percentDiscount: 10,
          slug: "iphone-7",
          categoriesId: 1,
        },
        {
          title: "Iphone 7",
          price: 5990000,
          version: "7",
          quantity: 10,
          imageAvatar:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776924/blueprint_image_avatar/fcxbcf1xrzbrawtliteu.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776926/blueprint_image_avatar/szwohq4bot3pbozo0gpi.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776928/blueprint_image_avatar/c7dlmb3elxbdluwdnzss.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_avatar/tbyxcdgmhui8lf1vv8fp.png"]',
          imageDetail:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_detail/cq5zcvypv9vs0hlou2vj.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776931/blueprint_image_detail/seyrfefbo8g1qn9dluhd.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776932/blueprint_image_detail/j4qi55qbdqkmqwxwoukl.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776933/blueprint_image_detail/enk42nmhlzp6sbcbxyzb.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776934/blueprint_image_detail/pvtne8pz7wlfro03zmk3.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776936/blueprint_image_detail/jdcjtmqw2tdbaxwm3gny.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776937/blueprint_image_detail/meia8nphlmgstt6vkd3k.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776939/blueprint_image_detail/zhofsd2ktd3ub6q9xe2s.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776940/blueprint_image_detail/zr1ofohgfpimbcr814ok.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776941/blueprint_image_detail/goonxjckwdenciag6vuz.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776941/blueprint_image_detail/ewofkoplowsfofqljsc5.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776942/blueprint_image_detail/i9lhqkw4wstioxli5tfl.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776943/blueprint_image_detail/t5gurh7afgn2lmfrk5of.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776944/blueprint_image_detail/dfgr7czla0rrjc79rcd5.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776945/blueprint_image_detail/avplyri3mat39nsacrc9.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776945/blueprint_image_detail/emhn0i4antaus5jeflzk.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776946/blueprint_image_detail/x0l4oordwj0qjgaoy3v6.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776947/blueprint_image_detail/kn3wbbve8vaeazsr2onv.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776948/blueprint_image_detail/hyo3tqyh3agkvs7x8npb.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776949/blueprint_image_detail/gl1rvso3aut6obckovp9.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776949/blueprint_image_detail/evy76vv3dnxm8gu2sapw.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776950/blueprint_image_detail/jjpmrpr6c98odniszhdc.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776951/blueprint_image_detail/jikvp7t9qtoxgmv5u64q.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776952/blueprint_image_detail/s06xzpifl79zf3aw2ol6.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776953/blueprint_image_detail/qexgzikewja01juiiqca.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776953/blueprint_image_detail/lpurjaiceta7i3wgh8iy.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776954/blueprint_image_detail/ckhlddhaheqhfjyligpo.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776957/blueprint_image_detail/b9srbmqg2af3ic5s05r8.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776958/blueprint_image_detail/sboeqz3dbw3qqm92tjpw.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776959/blueprint_image_detail/g4h0fplpb2yvns0uyjjk.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776960/blueprint_image_detail/pvrbdpilowiw9fsvtuxv.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776960/blueprint_image_detail/hvnkbauhbehbj3y6ctfp.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776961/blueprint_image_detail/qhusx3kymzwrzxdrde7u.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776962/blueprint_image_detail/xhi0d4q6iwcjcunj1qnc.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776963/blueprint_image_detail/i5lsz0sjhsp9c0unjsmw.jpg"]',
          colors: '["red","black"]',
          percentDiscount: 10,
          slug: "iphone-7",
          categoriesId: 1,
        },
        {
          title: "Iphone 7",
          price: 5990000,
          version: "7",
          quantity: 10,
          imageAvatar:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776924/blueprint_image_avatar/fcxbcf1xrzbrawtliteu.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776926/blueprint_image_avatar/szwohq4bot3pbozo0gpi.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776928/blueprint_image_avatar/c7dlmb3elxbdluwdnzss.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_avatar/tbyxcdgmhui8lf1vv8fp.png"]',
          imageDetail:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_detail/cq5zcvypv9vs0hlou2vj.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776931/blueprint_image_detail/seyrfefbo8g1qn9dluhd.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776932/blueprint_image_detail/j4qi55qbdqkmqwxwoukl.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776933/blueprint_image_detail/enk42nmhlzp6sbcbxyzb.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776934/blueprint_image_detail/pvtne8pz7wlfro03zmk3.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776936/blueprint_image_detail/jdcjtmqw2tdbaxwm3gny.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776937/blueprint_image_detail/meia8nphlmgstt6vkd3k.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776939/blueprint_image_detail/zhofsd2ktd3ub6q9xe2s.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776940/blueprint_image_detail/zr1ofohgfpimbcr814ok.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776941/blueprint_image_detail/goonxjckwdenciag6vuz.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776941/blueprint_image_detail/ewofkoplowsfofqljsc5.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776942/blueprint_image_detail/i9lhqkw4wstioxli5tfl.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776943/blueprint_image_detail/t5gurh7afgn2lmfrk5of.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776944/blueprint_image_detail/dfgr7czla0rrjc79rcd5.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776945/blueprint_image_detail/avplyri3mat39nsacrc9.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776945/blueprint_image_detail/emhn0i4antaus5jeflzk.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776946/blueprint_image_detail/x0l4oordwj0qjgaoy3v6.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776947/blueprint_image_detail/kn3wbbve8vaeazsr2onv.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776948/blueprint_image_detail/hyo3tqyh3agkvs7x8npb.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776949/blueprint_image_detail/gl1rvso3aut6obckovp9.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776949/blueprint_image_detail/evy76vv3dnxm8gu2sapw.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776950/blueprint_image_detail/jjpmrpr6c98odniszhdc.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776951/blueprint_image_detail/jikvp7t9qtoxgmv5u64q.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776952/blueprint_image_detail/s06xzpifl79zf3aw2ol6.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776953/blueprint_image_detail/qexgzikewja01juiiqca.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776953/blueprint_image_detail/lpurjaiceta7i3wgh8iy.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776954/blueprint_image_detail/ckhlddhaheqhfjyligpo.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776957/blueprint_image_detail/b9srbmqg2af3ic5s05r8.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776958/blueprint_image_detail/sboeqz3dbw3qqm92tjpw.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776959/blueprint_image_detail/g4h0fplpb2yvns0uyjjk.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776960/blueprint_image_detail/pvrbdpilowiw9fsvtuxv.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776960/blueprint_image_detail/hvnkbauhbehbj3y6ctfp.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776961/blueprint_image_detail/qhusx3kymzwrzxdrde7u.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776962/blueprint_image_detail/xhi0d4q6iwcjcunj1qnc.jpg","https://res.cloudinary.com/daofedrqe/image/upload/v1710776963/blueprint_image_detail/i5lsz0sjhsp9c0unjsmw.jpg"]',
          colors: '["red","black"]',
          percentDiscount: 10,
          slug: "iphone-7",
          categoriesId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
