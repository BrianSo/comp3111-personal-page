import './work.scss';
import React from 'react';
import Data from '../data';
import Modal from '../views/modal';

var GalleryModal = React.createClass({
    getInitialState(){
        return {
            works:Data.works
        };
    },
    render: function() {
        return (
            <Modal title="My Work" id="work">
                <div className="gallery">
                    <div className="gallery-row">
                        {this.state.works.map((work,i)=>
                            <div className="col-md-4 gallery-grids" key={i}>
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
            </Modal>
        );
    }
});
export default GalleryModal;