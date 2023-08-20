import classes from './Badge.module.css';

const Badge = (props) => {
    let text;
    let icon;
    var badgeColor;
    var badgeBgColor;

    if (props.type === "popular") {
        badgeColor = "#EF4444";
        badgeBgColor = "#FEE2E2";
        text = "Popular";
        icon = "bi bi-fire badge-icon";
    } else if (props.type === "newHouse") {
        badgeColor = "#1D4ED8";
        badgeBgColor = "#DBEAFE";
        text = "New House"
        icon = "bi bi-house-fill badge-icon";
    } else if (props.type === "bestDeals") {
        badgeColor = "#047857";
        badgeBgColor = "#D1FAE5";
        text = "Best Deals";
        icon = "bi bi-wallet2 badge-icon";
    }

    const style = () => {
        return {
            color: badgeColor,
            backgroundColor: badgeBgColor
        };
    };


    return (
        <div className={classes.badge} style={style()}>
            <i className={icon}/>
            {text}
        </div>
    );
};

export default Badge;