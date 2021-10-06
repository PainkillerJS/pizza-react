import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox='0 0 280 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <circle cx='132' cy='115' r='115' />
      <rect x='0' y='243' rx='6' ry='6' width='280' height='18' />
      <rect x='0' y='273' rx='6' ry='6' width='280' height='84' />
      <rect x='0' y='373' rx='6' ry='6' width='89' height='31' />
      <rect x='131' y='363' rx='20' ry='20' width='149' height='47' />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
