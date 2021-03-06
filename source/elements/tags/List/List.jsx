export const List__item =
  FcUtils.createBasicComponent({
    name: 'List__item',
    defaultProps: {
      tagName: 'li'
    }
  });


export const List = (props) => {
  const {
    tagName,
    className,
    variant,
    children,
    ...attrs
  } = props;

  const Tag = tagName || variant === 'ordered' ? 'ol' : 'ul';
  const classStack = FcUtils.createClassStack([
    'List',
    `List--${variant}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

List.defaultProps = {
  variant: 'unordered'
};

List.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['unordered', 'ordered', 'blank']),
  children: PropTypes.node.isRequired
};


export default List;
