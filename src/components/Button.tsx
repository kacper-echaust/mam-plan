const Button = ({ text }: { text: string }) => {
  return (
    <button className="px-14 uppercase  cursor-pointer bg-primaryGreen   py-2 text-white rounded-xl font-medium transition hover:scale-105 hover:shadow-lg ">
      {text}
    </button>
  );
};
export { Button };
