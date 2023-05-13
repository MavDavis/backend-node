(function (message) {
  const action = "send a message";
  console.log("hy", message, action);
})("marvy")(
  (function (message) {
    const action = "call me";
    console.log("hy", message, ',',action);
  })("david")
);
