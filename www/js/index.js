/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady:function(){
		checkInternetConnection();
		mobileAppDeviceReady();
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
};

app.initialize();
var isCordovaApp = true;
function checkInternetConnection(){
	var networkState = navigator.connection.type;
	if(networkState == "none"){
		onlineCheck();
		$(".top-notifications").hide();
		$(".navbar-fixed-top").css("left","0px");
		$('.app').empty().append('<img src="icon.png" style="display:block;margin:40px auto 0px auto;height:80px;width:80px; margin-top:150px;"><h3 class="text-center color-black font25 mt-3 mb-0">Can\'t connect</h3><p class="text-center font15">You need an internet connection to use PGPrep<br><br><button type="button" onclick="checkOnline();" class="btn btn-primary br-3">Retry</button></p>');
	}
}

function onlineCheck(){
	document.addEventListener("online",checkOnline,false);
}
function checkOnline(){
	location.reload();
}