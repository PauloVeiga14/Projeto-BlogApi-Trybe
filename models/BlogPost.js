module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPosts', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false, 
  });

  return BlogPost;
};