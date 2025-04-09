 
const Container = ({ children, className = "" }) => {
    return (
      <div className={`max-w-7xl mx-auto m-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Container;
  