'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // 컬럼 속성 변경용
    //  await queryInterface.changeColumn('badges', 'leftBadges', {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   defaultValue: 0,
    // })

    // 테이블 내부 레코드 값 변경용
     await queryInterface.bulkInsert("badges", [
        {
          name: "beauty",
          createdAt: new Date,
          updatedAt: new Date,
          desc: "뷰티 카테고리 1시간 달성 시 지급되는 뱃지입니다.",
          imageUrl: "",
        }, {
          name: "sports",
          createdAt: new Date,
          updatedAt: new Date,
          desc: "스포츠 카테고리 1시간 달성 시 지급되는 뱃지입니다.",
          imageUrl: "",
        }, {
          name: "study",
          createdAt: new Date,
          updatedAt: new Date,
          desc: "스터디 카테고리 1시간 달성 시 지급되는 뱃지입니다.",
          imageUrl: "",
        }, {
          name: "counsel",
          createdAt: new Date,
          updatedAt: new Date,
          desc: "상담 카테고리 1시간 달성 시 지급되는 뱃지입니다.",
          imageUrl: "",
        }, {
          name: "culture",
          createdAt: new Date,
          updatedAt: new Date,
          desc: "문화 카테고리 1시간 달성 시 지급되는 뱃지입니다.",
          imageUrl: "",
        }, {
          name: "etc",
          createdAt: new Date,
          updatedAt: new Date,
          desc: "기타 카테고리 1시간 달성 시 지급되는 뱃지입니다.",
          imageUrl: "",
        }, {
          name: "firstCome",
          createdAt: new Date,
          updatedAt: new Date,
          desc: "선착순 100명에게만 지급되는 뱃지입니다.",
          imageUrl: "",
          leftBadges: 100,
        }, {
          name: "reviewer",
          createdAt: new Date,
          updatedAt: new Date,
          desc: "버그나 리뷰를 제보해주신에게 지급되는 뱃지입니다.",
          imageUrl: "",
        },

    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    
    
  }
};