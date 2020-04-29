
var loginManger = {
    data: function () {
		return {
        	usr: {status: '', no: '', pwd: ''},
        	util: {msg: '', pwd_cnt: 0, MAX_PWD_CNT: 5}
		}
    },
    methods: {
        login: function () {
            var data;
            if (data = this.valid())
				alert("Just a static page!")
        },
        valid: function () {
            var data = {};
            switch (this.usr.status) {
                case 'Admin': data.status = 0; break;
                case 'Accountant': data.status = 1; break;
                case 'Auditor': data.status = 2; break;
                case 'Manager': data.status = 3; break;
                default: this.util.msg = 'Status -> Please Select a Status'; return false;
            }
            if (this.usr.no === '') {
                this.util.msg = 'Employee NO. -> Please Enter your ID';
                return false;
            }
            else
                data.no = this.usr.no;
            if (this.usr.pwd == '') {
                this.util.msg = 'Password -> Please Enter your Password';
                return false;
            }
            else
                data.pwd = this.usr.pwd;
            return data;
        }
    },
	template: `
		<div class="login-border">
			<div class="login-head-border">
				XX
				<br>
				会计系统
			</div>
			<div class="login-nav-border">STATUS</div>
			<div class="login-option-border">
				<select class="login-select" v-model="usr.status">
					<option disabled value="">Please select</option>
					<option>Admin</option>
					<option>Accountant</option>
					<option>Auditor</option>
					<option>Manager</option>
				</select>
			</div>
			<div class="login-nav-border">No.</div>
			<div class="login-option-border">
				<input type="text" class="login-no" placeholder="Please enter employee No." v-model.number="usr.no">
			</div>
			<div class="login-nav-border">Password</div>
			<div class="login-option-border">
				<input type="password" placeholder="Please enter password " class="login-pwd" v-model="usr.pwd">
			</div>
			<div class="login-tip-border">{{util.msg}}</div>
			<div class="login-btn-border">
				<button class="login-btn" v-on:click="login">Login</button>
			</div>
			<div class="login-dev-border">powered by ZengJia</div>
		</div>
	`
}
