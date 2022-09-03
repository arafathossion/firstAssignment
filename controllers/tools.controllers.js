const { Users } = require("../tools");

module.exports.getAllUsers = (req, res) => {
    // const { limit } = req.query;
    // console.log(limit)
    // res.send(Users.slice(0,limit))
    res.send(Users)
}
module.exports.postUsers = (req, res) => {
    console.log(req.body)
    Users.push(req.body)
    res.send(Users)
}
module.exports.usersDetails = (req, res) => {
    const { id } = req.params;
    const found = Users.find(user => user.id == Number(id))
    console.log(typeof Number(id))
    res.send(found)
}

module.exports.patchId = (req, res) => {
    const { id } = req.params;
    const newData = Users.find(user => user.id === Number(id));
    newData.id = Number(id);
    newData.name = req.body.name;
    console.log(id,newData)
    res.send(newData)
}
// module.exports.bulkUpdate = (req, res) => {
//     // const newData = req.body;
//     const { id } = req.params;
//     const filter = { id: id };
//     const newData = Users.find(user => user.id === Number(id));
//     newData.id = id;
//     newData.name = req.body.name;
//     console.log(id)
//     res.send(newData)
// }
module.exports.delete = (req, res) => {
    const { id } = req.params;
    let some = Users;
    some = some?.filter(user => user.id !== Number(id));
    console.log(id, some);
    res.send(some)
}