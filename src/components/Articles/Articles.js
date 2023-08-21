import './Articles.css';
import ArticleCard from './ArticleCard';
import ArticleFeature from './ArticleFeature';

const Articles = () => {
    return (
        <section class="articles">
            <img src="../../assets/images/articles-blur.png" class="position-absolute article-blur" alt="" />
            <div className='text-center'>
                <hr class="small mx-auto" />
                <div class="display-6 mb-3">See Tips And Tricks From Our Partnership</div>
                <h2>Find Out More About <br />
                    Selling And Buying Homes</h2>
                <a href="#" class="search-btn me-1 mt-3">
                    More Articles
                </a>
            </div>

            <div class="row mt-5">
                <div class="col-xl-6 mx-auto px-4">
                    <ArticleCard author="Dianne Russel" title="The Things We Need To Check When We
                                    Want To Buy A House" timestamp="4 min read | 25 Apr 2021" avatarUrl={require("../../assets/avatar-1.png")}
                                     imageUrl={require("../../assets/home-7.png")}/>

                    <ArticleCard author="Courtney Henry" title="7 Things To Distinguish The
                                    Quality Of The House We Want To Buy" timestamp="6 min read | 24 Apr 2021" avatarUrl={require("../../assets/avatar-5.png")}
                                     imageUrl={require("../../assets/home-8.png")}/>

                    <ArticleCard author="Darlene Robertson" title="The Best Way To Know The
                                    Quality Of The House We Want To Buy" timestamp="2 min read | 24 Apr 2021" avatarUrl={require("../../assets/avatar-6.png")}
                                     imageUrl={require("../../assets/home-9.png")}/>

                </div>

                <div class="col-xl-6 mx-auto px-5 text-start">
                    <ArticleFeature title="The Things We Need To Check When We Want To Buy A House" author="Cameron Williams" body="Want to buy a house but are unsure about what we should
                    know, here I will try to explain what we should know and check when we want to buy a house" timestamp="4 min read | 25 Apr 2021"
                    image={require("../../assets/home-10.png")} avatar={require("../../assets/avatar-7.png")}/>

                </div>

            </div>
        </section>

    );
};

export default Articles;