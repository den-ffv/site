function SliderItem({ id, level }) {
  const className = `item level${level}`;
  return (
    <div className={className}>
      <img src={id} alt="image" />
    </div>
  );
}
export default SliderItem;
