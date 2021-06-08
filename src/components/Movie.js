import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite, removeFavorite } from '../actions/favoritesActions';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const { movies, displayFavorites } = props;
    const movie = movies.find(movie => movie.id === Number(id));

    const handleDeleteClick = e => {
        props.removeFavorite(movie.id);
        props.deleteMovie(movie.id);
        push('/movies');
    };

    const handleAddFavoriteClick = e => {
        props.addFavorite(movie);
    }

    return (<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>

                        <section>
                            {displayFavorites &&
                                <span className="">
                                    <input type="button" className="m-2 btn btn-dark" value="Add Favorite" onClick={handleAddFavoriteClick} />
                                </span>
                            }
                            <span className="delete">
                                <input type="button" className="m-2 btn btn-danger" value="Delete" onClick={handleDeleteClick} />
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies,
        displayFavorites: state.favorites.displayFavorites,
    };
};

export default connect(mapStateToProps, { deleteMovie, addFavorite, removeFavorite })(Movie);