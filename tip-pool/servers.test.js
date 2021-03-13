describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  // My addition
  // it('should return false', function(event){
  //   //const action = event.target()
  //   let serverName = "bob";
  //   updateServerTable();
  //   expect(submitServerInfo(serverName).toEqual(true));
  //   //updateServerTable();
  //   //serverNameInput.value = '';
  //   Object.toEqual(true);
  // })
  ///////
  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    //let curTdList = document.getElementById('#serverTable tbody tr td');
    let curTdList = document.getElementById('#serverTable tbody tr td');

    //expect(curTdList.length).toEqual(3);
    expect(curTdList.length).toEqual(2);
    //expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[0].innerText).toEqual('Alice');
    //expect(curTdList[1].innerText).toEqual('$0.00');
    expect(curTdList[2].innerText).toEqual("");
  });

  ////////////

  afterEach(function() {
    // teardown logic
    // make everything go back to original condition-means make them all empty
    allServers = {};
    serverTbody.innerHTML = '';
    serverId = 0;
  });
});

/////////
// describe("Servers test (with setup and tear-down)", function() {
//   beforeEach(function () {
//     serverNameInput.value = 'Alice';
//   });

  // it('should add a new server to allServers on submitServerInfo()', function () {
  //   submitServerInfo();

  //   expect(Object.keys(allServers).length).toEqual(1);
  //   expect(allServers['server' + serverId].serverName).toEqual('Alice');
  // });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
    expect(curTdList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
// })
