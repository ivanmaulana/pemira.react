import React, {Component} from 'react';
import HIMALKOM_DATA from '../../../data';
import swal from 'sweetalert';
import { fetchPost } from '../../../fetchers'

class Candidate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vote: null
        }

        this.handleClick = this.handleClick.bind(this)
        this.openModal = this.openModal.bind(this)
    }

    handleClick(event) {
        const { value } = event.target

        this.setState({
            vote: Number(value)
        })
    }

    openModal() {
        const self = this;

        if (!this.state.vote) {
            swal("Gagal", "Silahkan pilih salah satu kandidat ketua dan wakil ketua", "error");
        }
        else {
            swal({
                title: 'Apakah Kamu Yakin ?',
                text: HIMALKOM_DATA[this.state.vote - 1].ketua + ' & ' + HIMALKOM_DATA[this.state.vote - 1].wakil + ' Sebagai Ketua dan Wakil Ketua HIMALKOM 2017/2018 ?',
                button: {
                    text: "YAKIN",
                    closeModal: false,
                },
            })
            .then(name => {
                return fetchPost('http://test.agri.web.id/api/voteHimalkom', this.state, this.props.loginData.token)
            })
            .then(response => {
                if (response.status) {
                    swal({
                        title: "Berhasil",
                        text: "Terima kasih telah berpartisipasi pada PEMIRA HIMALKOM",
                        icon: "success",
                        button: {
                            confirm: "OK",
                        }
                    })
                }
                else {
                    swal({
                        title: "Gagal",
                        text: response.message,
                        icon: "error",
                        button: {
                            confirm: "OK",
                        }
                    })
                }
            })
            .then(() => {
                self.props.receivedVote()
            })
            .catch(err => {
                if (err) {
                    swal("Gagal terhubung ke server", "Silahkan coba lagi", "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
        }
    }

    render() {
        return(
            <div>
                <div className="col-md-10 col-md-offset-1 text-center">
                    <div className="row panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Calon Ketua dan Wakil Ketua HIMALKOM IPB 2017/2018</h3>
                        </div>

                        <div className="info text-center">
                            <span>Klik foto atau nama calon untuk memilih calon tersebut.</span>
                        </div>

                        <div>
                            {HIMALKOM_DATA.map((data, index) =>
                                <div className="col-md-4 col-sm-4 col-xs-12 text-center" key={index} style={{paddingTop: "20px"}}>
                                    <label>
                                        <input type="radio" name="fmipa" value={data.id} onChange={this.handleClick} checked={this.state.vote == data.id}/>
                                        <div className="shadow">
                                            <p className="id">
                                                {data.id}
                                            </p>
                                            <img src={"images/"+data.id+".jpg"} className="img-responsive" />
                                            <div className="row calon">
                                                <div className="col-xs-12">
                                                    <div className="col-xs-6 col-md-6">
                                                        <p><b>Calon Ketua</b></p>
                                                    </div>
                                                    <div className="col-xs-6 col-md-6">
                                                        <p><b>Calon Wakil Ketua</b></p>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12">
                                                    <div className="col-xs-6 col-md-6">
                                                        <p>{data.ketua}</p>
                                                    </div>
                                                    <div className="col-xs-6 col-md-6">
                                                        <p>{data.wakil}</p>
                                                    </div>
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
                        <button className="btn btn-primary btn-md btn-block" onClick={this.openModal}><span style={{fontSize: "20px"}}>PILIH</span></button>
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
