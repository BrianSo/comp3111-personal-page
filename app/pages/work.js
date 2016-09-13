import './work.scss';
import React from 'react';

var GalleryModal = React.createClass({
    getInitialState(){
        var state = {
            works:[
                {
                    img:"/public/images/g1.jpg",
                    description:"Lorem Ipsum is simply dummy the when an unknown galley"
                },
                {
                    img:"/public/images/g2.jpg",
                    description:"Lorem Ipsum is simply dummy the when an unknown galley"
                },
                {
                    img:"/public/images/g3.jpg",
                    description:"Lorem Ipsum is simply dummy the when an unknown galley"
                },
                {
                    img:"/public/images/g4.jpg",
                    description:"Lorem Ipsum is simply dummy the when an unknown galley"
                },
                {
                    img:"/public/images/g5.jpg",
                    description:"Lorem Ipsum is simply dummy the when an unknown galley"
                },
                {
                    img:"/public/images/g6.jpg",
                    description:"Lorem Ipsum is simply dummy the when an unknown galley"
                },
                {
                    img:"/public/images/g3.jpg",
                    description:"Lorem Ipsum is simply dummy the when an unknown galley"
                },
                {
                    img:"/public/images/g2.jpg",
                    description:"Lorem Ipsum is simply dummy the when an unknown galley"
                },
                {
                    img:"/public/images/g1.jpg",
                    description:"Lorem Ipsum is simply dummy the when an unknown galley"
                }
            ]
        };


        return state;
    },
    render: function() {
        return (

            <div className="modal fade modal-gallery" id="work" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">My Work</h4>
                        </div>
                        <div className="modal-body modal-spa">
                            <div className="gallery">
                                <div className="gallery-row">
                                    {this.state.works.map(work=>
                                        <div className="col-md-4 gallery-grids">
                                            <div className="gallery-w3ls-hover">
                                                <a href={work.img} data-lightbox="example-set" data-title={work.description}>
                                                    <img src={work.img} className="img-responsive zoom-img" alt />
                                                    <div className="view-caption">
                                                        <h5>View+</h5>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>)
                                    }
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default GalleryModal;