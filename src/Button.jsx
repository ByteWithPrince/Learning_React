function Button() {
  // this is inline styling and for the modules styling we make a different folder and from there we import the css file and use it in the component also the file we make is button.module.css
  const styles = {
    backgroundColor: " hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",

    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  };

  return <button style={styles}>Click me</button>;
}
export default Button;
