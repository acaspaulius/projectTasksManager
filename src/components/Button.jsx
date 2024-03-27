const Button = ({ children, ...props }) => {
  return (
    <button className='px-4 py-2 text-xs md:text-base rounded-md bg-orange-700 text-orange-400 hover:bg-orange-600 hover:text-orange-100' {...props}>
      {children}
    </button>
  );
};

export default Button;
