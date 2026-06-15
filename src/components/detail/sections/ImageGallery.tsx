import type { ImageGallerySection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function ImageGallery({ section, isAlt }: { section: ImageGallerySection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <div className="container">
        <RichSectionHeader section={section} />
        <div className="rich-gallery-grid">
          {section.images.map((image, i) => (
            <figure key={i} className="rich-gallery-item">
              <img
                src={image.src}
                alt={image.alt}
                className="rich-gallery-img"
                loading="lazy"
              />
              {image.caption && (
                <figcaption className="rich-gallery-caption">{image.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
        {section.images.length === 0 && (
          <div className="rich-gallery-placeholder">
            <p>Screenshots coming soon</p>
          </div>
        )}
      </div>
    </div>
  )
}
