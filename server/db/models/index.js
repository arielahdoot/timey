const User = require('./user');
const Project = require('./project');
const Ticket = require('./ticket');
const UserTicket = require('./userTicket');

Project.belongsToMany(User, { through: 'user-project' });
User.belongsToMany(Project, { through: 'user-project' });
User.belongsToMany(Ticket, { through: UserTicket });
Ticket.belongsToMany(User, { through: UserTicket });

module.exports = {
  User,
  Project,
  Ticket
};
