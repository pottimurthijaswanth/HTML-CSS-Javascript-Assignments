const chatRoomsUsers1 = [
    {
      sai: "hi",
    },
    { jash: "how are you" },
    { nithin: "Hello! sai & jash" },
  ];
  const chatRoomsUsers2 = [
    {
      Siva: "Hey! I stuck in traffic now.",
    },
    { vinith: "Okay, Siva. But please come as soon as possible." },
    { malli: "Siva, Until you come I wll handle this." },
  ];
  const getUserName = (userData) => {
    console.log("chatroom1");
    userData.map((item) => console.log(item));
  };
  const getUserMessages = (userData) => {
    console.log("");
    console.log("chatroom2");
    userData.map((item) => console.log(item));
  };
  getUserName(chatRoomsUsers1);
  getUserMessages(chatRoomsUsers2);
