import blob from "../../images/navy-blob.png";

function CustomOrder() {
  return (
    <div className="flex flex-col items-center p-20 bg-center bg-no-repeat text-white" style={{ backgroundImage: `url(${blob})` }}>
      <p className="text-xl w-80 text-center pt-6">Have an idea for a custom order? Please reach out!</p>
      
      <a href="mailto:forbiddenfruitberlin@gmail.com" className="pt-1 underline decoration-teal hover:decoration-lime">
        forbiddenfruitberlin@gmail.com
      </a>
    </div>
  );
}

export default CustomOrder;
