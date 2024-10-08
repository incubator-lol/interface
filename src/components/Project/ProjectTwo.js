import React, { Component } from 'react';

const initData = {
    sub_heading: "Funded Campaigns",
    heading: "Completed IDOs",
    btn: "View All",
    actionBtn: "Load More"
}

const data = [
    {
        id: "1",
        img: "/img/thumb_6.png",
        blockchain: "/img/ethereum-classic.png",
        title: "Ancient Kingdom",
        price: "Price (KING) = 0.89 USC",
        publish: "5 hours ago",
        process: "x86",
        amount: "$1.06298"
    },
    {
        id: "2",
        img: "/img/thumb_7.png",
        blockchain: "/img/ethereum-classic.png",
        title: "Realm Hunter",
        price: "Price (HUNT) = 0.72 USC",
        publish: "7 hours ago",
        process: "x97",
        amount: "$0.9268"
    },
    {
        id: "3",
        img: "/img/thumb_8.png",
        blockchain: "/img/ethereum-classic.png",
        title: "Cyber City",
        price: "Price (CITY) = 0.68 USC",
        publish: "9 hours ago",
        process: "x64",
        amount: "$2.87641"
    },
    {
        id: "4",
        img: "/img/thumb_9.png",
        blockchain: "/img/ethereum-classic.png",
        title: "Pixel Pix",
        price: "Price (PIX) = 0.49 USC",
        publish: "6 hours ago",
        process: "x75",
        amount: "$1.5967"
    },
    {
        id: "5",
        img: "/img/thumb_10.png",
        blockchain: "/img/ethereum-classic.png",
        title: "Chaos of 12 Legends",
        price: "Price (LGD) = 0.78 USC",
        publish: "9 hours ago",
        process: "x94",
        amount: "$0.43615"
    }
]

class ProjectTwo extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        });
    }
    render() {
        return (
            <section className="explore-area prev-project-area load-more p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                            <div className="intro-content">
                                <span className="intro-text">{this.state.initData.sub_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                            </div>
                            <div className="intro-btn">
                                <a className="btn content-btn" href="/project-four">{this.state.initData.btn}</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`pdt_${idx}`} className="col-12 item">
                                    <div className="card project-card prev-project-card">
                                        <div className="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                                            <div className="item-header d-flex align-items-center mb-4 mb-md-0">
                                                <img className="card-img-top avatar-max-lg" src={item.img} alt="" />
                                                <div className="content ml-4">
                                                    <h4 className="m-0">{item.title}</h4>
                                                    <h6 className="mt-3 mb-0">{item.price}</h6>
                                                </div>
                                            </div>
                                            <div className="blockchain d-inline-block mr-1 mr-md-0">
                                                <img src={item.blockchain} alt="" />
                                            </div>
                                            <div className="single-item">
                                                <span>{item.publish}</span>
                                            </div>
                                            <div className="single-item d-none d-md-inline-block">
                                                <span>{item.process}</span>
                                            </div>
                                            <div className="single-item">
                                                <span>ATH:</span>
                                                <span>{item.amount}</span>
                                            </div>
                                        </div>
                                        <a className="project-link" href="/project-single" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <a id="load-btn" className="btn btn-bordered-white mt-4 mt-md-5" href="#">{this.state.initData.actionBtn}</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectTwo;