"use strict";

function writeLS(x) {
  window.localStorage['test'] = x;
}

function writeWSQL(x) {
  var db = openDatabase('test', '1.0', 'test', 1024);
  if (!db) {
    alert('WebSQL DB creation failed');
    return;
  }
  onError = function(tx, e) {
    alert('WebSQL error: ' + e.message);
  };
  db.transaction(function(tx) {
    var sql = 'CREATE TABLE IF NOT EXISTS table (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT)';
    tx.executeSql(sql, [], null, onError);
  }, onError, null);
  db.transaction(function(tx) {
    var sql = 'INSERT INTO table(text) VALUES(?)';
    tx.executeSql(sql, [x], null, onError);
  }, onError, null);
}

function writeIDB(x) {
  window.asyncStorage.setItem('test', x);
}

function readLS(callback) {
  callback(localStorage['test']);
}

function readWSQL(callback) {
  var db = openDatabase('test', '1.0', 'test', 1024);
  if (!db) {
    alert('WebSQL DB creation failed');
    return;
  }
  onError = function(tx, e) {
    alert('WebSQL error: ' + e.message);
  };
  db.transaction(function(tx) {
    var sql = 'CREATE TABLE IF NOT EXISTS table (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT)';
    tx.executeSql(sql, [], null, onError);
  }, onError, null);
  db.transaction(function(tx) {
    var sql = 'SELECT * FROM table';
    tx.executeSql(sql, [], function(tx, results) {
      if (results.rows.length == 0) {
        alert('Zero rows');
	return false;
      }
      callback(results.rows.item(results.rows.length - 1));
    }, onError);
  }, onError, null);
}

function readIDB(callback) {
  window.asyncStorage.getItem('test', callback);
}
