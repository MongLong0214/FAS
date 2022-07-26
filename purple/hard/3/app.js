const foo = (users) => {
  const friends = [];
  users.forEach((user) => {
    if (user.length === 4) {
      friends.push(user);
    }
  });

  return friends;
};

console.log(foo(["Ryan", "Kieran", "Mark"]));
