class Feedback {
    constructor (reviewer, rating, review)
    {
        this.reviewer = reviewer;
        this.rating = rating;
        this.review = review;
    }
}

exports.createFeedback = function(reviewer, rating, review)
{
    return new Feedback(reviewer, rating, review);
}