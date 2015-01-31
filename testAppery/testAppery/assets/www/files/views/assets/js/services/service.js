/*
 * Service settings
 */
var NGODB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "54cbd633e4b0a9577c120c5b"
}

/*
 * Services
 */

var NGODB_DonorDetails_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/DonorDetails/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': NGODB_settings
});

var NGODB_DonorDetails_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/DonorDetails/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': NGODB_settings
});

var NGODB_DonorDetails_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/DonorDetails',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': NGODB_settings
});

var NGODB_Donors_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Donors',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': NGODB_settings
});

var NGODB_Donors_delete_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Donors/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': NGODB_settings
});

var NGODB_Donors_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Donors',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': NGODB_settings
});

var NGODB_Donors_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Donors/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': NGODB_settings
});

var NGODB_Donors_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Donors/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': NGODB_settings
});

var NGODB_Donors_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Donors',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': NGODB_settings
});

var NGODB_DonorDetails_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/DonorDetails',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': NGODB_settings
});

var NGODB_DonorDetails_delete_service = new Apperyio.RestService({
    'url': '{database_url}/collections/DonorDetails/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': NGODB_settings
});

var NGODB_DonorDetails_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/DonorDetails',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': NGODB_settings
});