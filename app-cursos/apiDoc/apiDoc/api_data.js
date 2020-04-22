define({ "api": [
  {
    "type": "get",
    "url": "/cursos/:id",
    "title": "Retornar um curso de acordo com o ID passado",
    "name": "getCurso",
    "group": "Cursos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>ID do curso</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do Curso.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Nome da Categoria.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./myApi.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/cursos",
    "title": "Retornar uma lista de cursos",
    "name": "getCursos",
    "group": "Cursos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do Curso.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Nome da Categoria.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./myApi.js",
    "groupTitle": "Cursos"
  }
] });
