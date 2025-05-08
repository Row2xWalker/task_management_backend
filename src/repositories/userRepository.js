const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
  ];
  
  exports.findAll = async () => {
    return users;
  };
  
  exports.findById = async (id) => {
    return users.find(user => user.id === id);
  };