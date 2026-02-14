export default function LayoutVermelho({
    noticias
}) {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-3">
                {" "}
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ">
                    {" "}
                    <div className="col-10 col-sm-8 col-lg-6">
                        {" "}
                        <img
                            src={noticias.imagem}
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={500}
                            height={500}
                            loading="lazy"
                        />{" "}
                    </div>{" "}
                    <div className="col-lg-6">
                        {" "}
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                            {noticias.titulo}
                        </h1>
                        <p className="lead">
                            {noticias.descricao}
                        </p>
                        <div className="d-grid d-md-flex d-flex justify-content-between align-items-center ps-2">
                            <span className="badge d-flex align-items-center p-1 pe-2 ps-2 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-pill gap-1">
                                {" "}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-megaphone" viewBox="0 0 16 16" color="#781302">
                                    <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z" />
                                </svg>
                                Notícia urgente
                            </span>
                            <div className="d-flex justify-content-end">
                                <small className="text-body-secondary">{noticias.data}</small>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </div>
        </>
    )
}