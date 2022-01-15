function ListOfProject( { List , deleteProject } ){

    function handleDelete(id){
       deleteProject(id)
    }

    return(
        List.map( (e)=> <div key={e.id}>
            Project Name : {e.project_name}
            <br/>
            Link : {e.link_url}
            <br/>
            description : {e.description}
            <button type="delete" onClick={()=>handleDelete(e.id)}>Delete</button></div>)
    )
}
export default ListOfProject;