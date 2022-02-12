module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: false, 
  });

  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      { as: 'posts', through: PostsCategory, foreignKey: 'categoryId', otherKey: 'postId' });
    models.BlogPost.belongsToMany(models.Category,
       { as: 'categories', through: PostsCategory, foreignKey: 'postId', otherKey: 'categoryId' });
  };

  return PostsCategory;
};