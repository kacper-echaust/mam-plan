type Props = {
  text: string;
  scrollTo: string;
};

const MenuItem = ({ text, scrollTo }: Props) => {
  return (
    <li className="cursor-pointer hover:text-primaryGreen transition duration-200 ">
      <a href={scrollTo}>{text}</a>
    </li>
  );
};
export { MenuItem };
