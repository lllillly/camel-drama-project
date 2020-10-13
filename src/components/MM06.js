import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Fade from 'react-reveal/Fade';

class MM06 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dramaName: "",

      dramaContent: "",

      open: false,
    };

    this.handleValueChange = this.handleValueChange.bind(this);

    this.handleClickOpen = this.handleClickOpen.bind(this);

    this.handleClose = this.handleClose.bind(this);
  }

  render() {
    return (
      <div className="MM06">
        <div className="MM06__contentArea">
          <Fade left>
          <div className="MM06__contentArea1">
            <h2 className="dramaTitle">드라마 등록 안내</h2>
            <p>① 카멜드라마 앱 설치 및 가입</p>
            <p>② 가입 승인 후 드라마 소개 등록</p>
            <p>③ 드라마 등록 완료 후 컨텐츠 추가</p>
          </div>
          </Fade>
          <Fade right>
          <div className="MM06__contentArea2">
            <hr />
            <br />
            <h2 className="dramaTitle">마케팅 및 제휴 문의</h2>
            <div className="MM06__contentArea2__2">
              <p>카멜드라마와 함께 성장할 드라마의 연락을 기다립니다.</p>
              <div className="MM06__dialogArea">
                <button variant="contained" className="MM06__dialog-btn" onClick={this.handleClickOpen}>
                  드라마 추천
                </button>

                <Dialog open={this.state.open} onClose={this.handleClose}>
                  <DialogTitle>드라마 추천</DialogTitle>

                  <DialogContent>
                    <TextField
                      label="추천할 드라마 이름"
                      type="text"
                      name="dramaName"
                      value={this.state.dramaName}
                      onChange={this.handleValueChange}
                    />
                    <br />
                    <br />
                    <textarea
                      placeholder="드라마 줄거리"
                      type="text"
                      name="dramaContent"
                      value={this.state.dramaContent}
                      onChange={this.handleValueChange}
                    />
                    <br />
                  </DialogContent>

                  <DialogActions>
                    <button variant="contained" onClick={this.handleClose}>드라마 추천하기</button>

                    <button variant="outlined" onClick={this.handleClose}>
                      닫기
                    </button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="MM06__contentArea3">
            <hr />
            <br />
            <h2 className="dramaTitle">고객센터 및 기타 문의</h2>
            <a href="tel:010-6269-1936">010-6269-1936(AM 01:00 ~ PM 12:59)</a>
            <br />
            <br />
            <a href="mailto:4leaf.omh@gmail.com">4leaf.omh@gmail.com</a>
          </div>
          </Fade>
        </div>
      </div>
      
    );
  }

  handleValueChange(e) {
    let nextState = {};

    nextState[e.target.name] = e.target.value;

    this.setState(nextState);
  }

  handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      dramaName: "",

      dramaContent: "",

      open: false,
    });
  }


}

export default MM06;
