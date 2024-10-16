import { useEffect, useRef } from 'react';
import { timeline } from '../data/timeline';

export function TimelineSection() {
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('fade-out');
        } else {
          entry.target.classList.remove('fade-in');
          entry.target.classList.add('fade-out');
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    eventRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    const eventRefsCurrent = eventRefs.current;

    return () => {
      eventRefsCurrent.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="TimelineSection">
      <h2>A flight through Serena's life ✈️</h2>
      <div className="Timeline">
        {timeline.map((data, idx) => {
          const side = idx % 2 === 0 ? 'Left' : 'Right';
          return (
            <div
              key={idx}
              className={side}
              ref={(el) => {
                eventRefs.current[idx] = el;
              }}
            >
              <span className="Joint" />
              <div className="Content">
                <div className="Date">{data.date}</div>
                <div className="Text">
                  <div className="Title">
                    <strong>
                      <p>{data.title}</p>
                    </strong>
                  </div>
                  {data.location && (
                    <div className="Location">
                      <data.flag title={data.location} />
                      <i>{data.location}</i>
                    </div>
                  )}
                  <div className="Description">
                    <p className="Subtitle">{data.subtitle}</p>
                    {Array.isArray(data.text) &&
                    data.title !==
                      'Research Assistant, University of New South Wales' ? (
                      <ul>
                        {data.text.map((line, index) => (
                          <li key={index}>
                            <p>{line}</p>
                          </li>
                        ))}
                      </ul>
                    ) : Array.isArray(data.text) &&
                      data.title ===
                        'Research Assistant, University of New South Wales' ? (
                      <>
                        <p>{data.text[0]}</p>
                        <ul>
                          {data.text.slice(1, -1).map((line, index) => (
                            <li key={index}>
                              <p>{line}</p>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p>{data.text}</p>
                    )}
                  </div>
                </div>
                {data.imageUrl && (
                  <div className="Image">
                    <img
                      src={data.imageUrl}
                      alt={data.title}
                      className="FaceImage"
                    />
                    {data.icon && (
                      <div className="IconImage">
                        <img
                          src={data.icon}
                          alt={data.title}
                          className="IconImage"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="SeparatorBig" />
        <div className="SeparatorSmall"></div>
      </div>
    </section>
  );
}
