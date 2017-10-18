import React, {Component} from 'react';
import HIMALKOM_DATA from "../../../data";

class Candidate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const { value } = event.target

        this.setState({
            id: Number(value)
        })
    }

    render() {
        return(
            <div>
                <div className="col-md-10 col-md-offset-1 text-center">
                    <div className="row panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Calon Ketua dan Wakil Ketua HIMALKOM IPB 2016/2017</h3>
                        </div>

                        <div className="info text-center">
                            <span>Klik foto atau nama calon untuk memilih calon tersebut.</span>
                        </div>

                        <div className="panel-body">
                            {HIMALKOM_DATA.map((data, index) =>
                                <div className="col-md-4 col-sm-4 col-xs-12 text-center" key={index} style={{paddingTop: "20px"}}>
                                    <label>
                                        <input type="radio" name="fmipa" value={data.id} onChange={this.handleClick} checked={this.state.id == data.id}/>
                                        <div className="shadow">
                                            <p className="id">
                                                {data.id}
                                            </p>
                                            <img src={"images/"+data.id+".jpg"} className="img-responsive" />
                                            <div className="row calon">
                                                <div className="col-md-6 col-xs-6">
                                                    <p>Calon Ketua : <br />
                                                        <b className="nama">{data.name}</b>
                                                    </p>
                                                </div>

                                                <div className="col-md-6 col-xs-6">
                                                    <p>Calon Wakil Ketua : <br />
                                                        <b className="nama">{data.name}</b>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                <div className="row col-md-12 text-center">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <button className="btn btn-primary btn-md btn-block"><span style={{fontSize: "20px"}}>PILIH</span></button>
                    </div>
                </div>

                <div className="col-md-10 col-md-offset-1" style={{paddingTop: "30px"}}>
                    <blockquote className="blockquote-reverse">
                        <p>Klik Foto atau Nama Calon Pasangan Ketua dan Wakil Ketua HIMALKOM IPB 2016/2017. Kemudian tekan <b>PILIH</b>. </p>
                    </blockquote>
                </div>
            </div>
        )
    }
}

export default Candidate
