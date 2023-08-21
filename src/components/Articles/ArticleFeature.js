import "./ArticleFeature.css";

const ArticleFeature = (props) => {
    return (
        <>
            <img class="article-feat-image" src={props.image} alt="" />
            <div class="mt-4 mb-3">
                <img src={props.avatar} alt="" class="d-inline me-2" />
                <span class="display-5" >{props.author}</span>
                <br />
            </div>
            <h3 class="my-3 mb-3" >{props.title}</h3>

            <h6 class="mb-3">{props.body}</h6>

            <div class="timestamp">
                <i class="bi bi-clock-fill icon me-2"></i>
                <h6 class="m-0">{props.timestamp}</h6>
            </div>
        </>
    );
};

export default ArticleFeature;