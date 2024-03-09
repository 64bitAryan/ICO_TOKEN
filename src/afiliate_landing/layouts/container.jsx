export const Container = ({ children, className }) => {
  return <div className={` mx-auto px-4 h-full ${className}`}>{children}</div>;
};
