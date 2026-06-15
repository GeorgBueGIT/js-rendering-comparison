import type { Item } from '../types';

type ItemCardProps = {
  item: Item;
};

export function ItemCard({ item }: ItemCardProps) {
  return (
    <li className="card">
      <div className="card-media">
        <img
          src={item.imageUrl}
          alt={item.title}
          width={400}
          height={300}
        />
        <span className="badge">Category</span>
      </div>

      <div className="card-header">
        <div className="author">
          <div className="avatar" />
          <div className="author-info">
            <span className="author-name">Author {item.id % 50}</span>
            <time className="date">Published 2024</time>
          </div>
        </div>
        <span className="read-time">5 min read</span>
      </div>

      <div className="card-body">
        <h2>{item.title}</h2>
        <p className="desc">{item.description}</p>
        <p className="excerpt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="card-meta">
        <div className="tags">
          <span className="tag">javascript</span>
          <span className="tag">react</span>
          <span className="tag">performance</span>
          <span className="tag">benchmarking</span>
        </div>
        <div className="stats">
          <span>👁 {(item.id * 7) % 1000}</span>
          <span>💬 {(item.id * 3) % 100}</span>
          <span>♡ {(item.id * 11) % 500}</span>
        </div>
      </div>

      <div className="card-footer">
        <span className="price">{item.price}</span>
        <span className="separator">·</span>
        <span className="location">Available</span>
      </div>
    </li>
  );
}