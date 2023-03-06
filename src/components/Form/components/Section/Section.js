import './Section.scss';

export const Section = ({ title, description, children}) => {
  return (
    <div className="container">
      <div className="title">
       {title}
      </div>
      <div className="title--description">
       {description}
      </div>
      {children}
    </div>
  );
};
