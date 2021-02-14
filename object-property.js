const students = [
    {id:11, name: 'sajid'},
    {id:21, name: 'majid'},
    {id:31, name: 'aajid'},
    {id:41, name: 'cajid'},
    {id:51, name: 'wajid'}
]
const address = students.map(x => x.id)
// const address = students.filter(x => x.id > 30)
    console.log(address);
