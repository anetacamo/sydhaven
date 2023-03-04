import styles from './ResultsInfo.module.scss';

interface ResultsInfoProps {
  category: any;
  onCategorySet: any;
  onSearchQuerySet: any;
  searchQuery: any;
  blogsLength: any;
}

export default function ResultInfo({
  category,
  onCategorySet,
  onSearchQuerySet,
  searchQuery,
  blogsLength,
}: ResultsInfoProps) {
  return (
    <div className='flex' style={{ justifyContent: 'space-between' }}>
      <h4 style={{ marginTop: 0 }}>
        showing all{' '}
        {category.length === 0 || (
          <>
            <span
              className={`${styles.searchQuery} purplelight`}
              onClick={() => onCategorySet([])}
            >
              {category}
            </span>{' '}
          </>
        )}
        {searchQuery && (
          <>
            {' '}
            including{' '}
            <span
              className={`${styles.searchQuery} purplelight`}
              onClick={() => onSearchQuerySet('')}
            >
              {searchQuery}
            </span>
          </>
        )}
        <span className='darkgray'> {blogsLength} results</span>
      </h4>
    </div>
  );
}
