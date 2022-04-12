import classNames from '../../utils/classNames';

const EditorialCardLink = ({ href, title, dataContentParent, children }) => {
  if (href) {
    return (
      <a
        href={href}
        className="coop-c-editorialcard__link"
        data-contenttype="Card|Editorial"
        data-contentparent={dataContentParent}
        data-linktext={title}
      >
        {children}
      </a>
    );
  }

  return children;
};

const EditorialCard = ({
  title,
  label,
  href,
  children,
  dataContentParent,
  isHorizontal,
}) => {
  const classes = classNames('coop-c-editorialcard', [
    isHorizontal ? 'coop-c-editorialcard--horizontal' : null,
  ]);

  return (
    <article className={classes}>
      <EditorialCardLink
        href={href}
        dataContentParent={dataContentParent}
        title={title}
      >
        <div className="coop-c-editorialcard__inner">
          <figure className="coop-c-editorialcard__media">
            <picture className="coop-c-editorialcard__image">
              <source
                srcSet="//images.ctfassets.net/bffxiku554r1/1xIj1XR8rHSadHDMhxWyid/8c0e5d881334839a0e5809c9a8af8eca/Fairtrade_Supplier_Image.jpg?fm=webp&amp;q=60&amp;fit=thumb&amp;w=618&amp;h=346 1x"
                type="image/webp"
              />
              <source
                srcSet="//images.ctfassets.net/bffxiku554r1/1xIj1XR8rHSadHDMhxWyid/8c0e5d881334839a0e5809c9a8af8eca/Fairtrade_Supplier_Image.jpg?fm=jpg&amp;q=60&amp;fit=thumb&amp;w=618&amp;h=346 1x"
                type="image/jpeg"
              />
              <img
                src="//images.ctfassets.net/bffxiku554r1/1xIj1XR8rHSadHDMhxWyid/8c0e5d881334839a0e5809c9a8af8eca/Fairtrade_Supplier_Image.jpg?fm=jpg&amp;q=60&amp;fit=thumb&amp;w=618&amp;h=346"
                width="618"
                height="346"
                alt=""
              />
            </picture>
          </figure>
          <div className="coop-c-editorialcard__content">
            <header className="coop-c-editorialcard__header">
              {label ? (
                <p className="coop-c-editorialcard__subtitle">{label}</p>
              ) : null}
              <h3 className="coop-c-editorialcard__title">{title}</h3>
            </header>
            {children ? (
              <div className="coop-c-editorialcard__body">{children}</div>
            ) : null}
          </div>
        </div>
      </EditorialCardLink>
    </article>
  );
};

export default EditorialCard;
