import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';

import moment from 'moment';

// 1505459943394
// It's recommended to set locale in entry file globaly.
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
		<DatePicker defaultValue={moment('2017-5-12', 'YYYY-MM-DD')} disabledDate = {disabledDate} />    
	);
  }
}

function disabledDate(current){
	var oDate = new Date();
	oDate.setMonth(7,15);
	console.log(current.valueOf());
	return current && current.valueOf() > oDate.getTime();
}

ReactDOM.render(<App />, document.getElementById('root'));