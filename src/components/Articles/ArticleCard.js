import './ArticleCard.css';

const ArticleCard = (props) => {
    return (
        <div class="article-card">
            <div class="d-flex justify-items-center align-items-center">
                <img src={props.imageUrl} alt="" class="d-inline-block me-4" />
                <div>
                    <img src={props.avatarUrl} alt="" class="d-inline me-2" />
                    <span class="display-5">{props.author}</span>
                    <h1 class="display-3 my-3">{props.title}</h1>
                    <div class="timestamp">
                        <i class="bi bi-clock-fill icon me-2"></i>
                        <h6 class="m-0">{props.timestamp}</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ArticleCard;