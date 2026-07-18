function ClickButton() {


//   let count = 0;
//   const handleClick = (name) => {
//     if (count < 3) {
//       count++;
//       console.log(`${name} you have clicked me ${count} time/s`);
//     } else {
//       console.log(
//         `${name} Stop clicking me, you have clicked me ${count} time/s`,
//       );
//     }
//   };


    const handleClick = (e)=> e.target.textContent="Yushh";

  return <button onDoubleClick={(e) => handleClick(e)}>Click Me TWICE</button>;
}
export default ClickButton;
