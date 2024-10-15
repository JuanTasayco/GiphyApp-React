import { useGiphyHook } from "../hooks/giphyHook";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardGiphy({ currentSearch }: { currentSearch: string }) {
  const { giphyes, loading } = useGiphyHook(currentSearch);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 mx-0">
        {giphyes.map((giphy, index) => {
          return (
            <div className="col mt-3" key={index}>
              <img
                src={giphy.images.downsized_medium.url}
                className="card-img-top"
                alt={giphy.title}
              ></img>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{giphy.title}</h5>
                  <a
                    className="card-text"
                    style={{ cursor: "pointer" }}
                    onClick={() => redirectLink(giphy.url)}
                  >
                    {giphy.url}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {loading ? (
        <button className="btn border-0" type="button" disabled>
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      ) : null}
    </>
  );
}

function redirectLink(url: string) {
  window.open(url, "_blank");
}

export default CardGiphy;
