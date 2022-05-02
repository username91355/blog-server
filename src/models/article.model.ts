import sequelize from '../config/db.config';
import {DataTypes} from 'sequelize';

const Article = sequelize.define('article',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    text: {type: DataTypes.TEXT({length: 'long'})}
});

 const Comment = sequelize.define('comment',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING}
});

Article.hasMany(Comment);
Comment.belongsTo(Article);

export {
    Article,
    Comment
};