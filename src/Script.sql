CREATE SEQUENCE public.hito_indicador_id_hito_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE public.indicador_id_indicador_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE public.infobeneficiario_id_info_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE public.objetivo_logico_id_objetivo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE public.proyecto_id_proyecto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE public."proyecto-beneficiario_id_proyect_bene_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE public."user-proyect_id_user_proyect_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE public.usuario_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE public.beneficiario (
    id_info_bene bigint NOT NULL,
    nombre character varying(50),
    apellido character varying(50),
    sexo character varying(20) NOT NULL,
    fecha_naci timestamp without time zone,
    id_info bigint NOT NULL,
    id_proyect_bene bigint
);

CREATE TABLE public.hito_indicador (
    id_hito bigint NOT NULL,
    meta numeric(10,2) NOT NULL,
    resultado character varying(50),
    porcentaje numeric(5,2),
    fecha_avance timestamp without time zone,
    id_indicador bigint
);

CREATE TABLE public.indicador (
    id_indicador bigint NOT NULL,
    medios_verificacion character varying(50),
    descripcion character varying(50),
    unidad_medida character varying(50),
    fecha_creacion timestamp without time zone,
    estado character varying(20),
    id_objetivo_logico bigint,
    meta_total double precision,
    resultado_total double precision,
    porcentaje_total double precision,
    recoleccion_datos_calculo character varying(50)
);

CREATE TABLE public.infobeneficiario (
    id_info bigint NOT NULL,
    municipio character varying(80) NOT NULL,
    comunidad character varying(80),
    nombre_org character varying(50),
    tipo_sector character varying(20),
    org_economica character varying(50),
    org_social character varying(50),
    geo_x character varying(50),
    geo_y character varying(50),
    geo_z character varying(50)
);

CREATE TABLE public.objetivo_logico (
    id_objetivo bigint NOT NULL,
    tipo character varying(50) NOT NULL,
    descripcion character varying(50),
    id_proyecto bigint,
    nivel integer,
    id_objetivo_padre bigint
);

CREATE TABLE public.proyecto (
    id_proyecto bigint NOT NULL,
    nombre character varying(50) NOT NULL,
    descripcion character varying(50) NOT NULL,
    tipo_area character varying(50) NOT NULL,
    area_tematica character varying(50),
    objetivo character varying(50),
    estado character varying(20) NOT NULL,
    inicio_date timestamp without time zone NOT NULL,
    final_date timestamp without time zone NOT NULL,
    id_proyect_bene bigint,
    id_user_proyect bigint
);

CREATE TABLE public."proyecto-beneficiario" (
    id_proyect_bene bigint NOT NULL,
    id_proyecto bigint,
    id_info_bene bigint
);

CREATE TABLE public.user_proyect (
    id_user_proyect bigint NOT NULL,
    id_usuario bigint,
    id_proyecto bigint
);

CREATE TABLE public.usuario (
    id_usuario bigint NOT NULL,
    nombre character varying(50),
    tipo_user character varying(50),
    email character varying(50) NOT NULL,
    usuario character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    id_user_proyect bigint
);

ALTER SEQUENCE public.hito_indicador_id_hito_seq OWNED BY public.hito_indicador.id_hito;
ALTER SEQUENCE public.indicador_id_indicador_seq OWNED BY public.indicador.id_indicador;
ALTER SEQUENCE public.infobeneficiario_id_info_seq OWNED BY public.infobeneficiario.id_info;
ALTER SEQUENCE public.objetivo_logico_id_objetivo_seq OWNED BY public.objetivo_logico.id_objetivo;
ALTER SEQUENCE public.proyecto_id_proyecto_seq OWNED BY public.proyecto.id_proyecto;
ALTER SEQUENCE public."proyecto-beneficiario_id_proyect_bene_seq" OWNED BY public."proyecto-beneficiario".id_proyect_bene;
ALTER SEQUENCE public."user-proyect_id_user_proyect_seq" OWNED BY public.user_proyect.id_user_proyect;
ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;

ALTER TABLE ONLY public.hito_indicador ALTER COLUMN id_hito SET DEFAULT nextval('public.hito_indicador_id_hito_seq'::regclass);
ALTER TABLE ONLY public.indicador ALTER COLUMN id_indicador SET DEFAULT nextval('public.indicador_id_indicador_seq'::regclass);
ALTER TABLE ONLY public.infobeneficiario ALTER COLUMN id_info SET DEFAULT nextval('public.infobeneficiario_id_info_seq'::regclass);
ALTER TABLE ONLY public.objetivo_logico ALTER COLUMN id_objetivo SET DEFAULT nextval('public.objetivo_logico_id_objetivo_seq'::regclass);
ALTER TABLE ONLY public.proyecto ALTER COLUMN id_proyecto SET DEFAULT nextval('public.proyecto_id_proyecto_seq'::regclass);
ALTER TABLE ONLY public."proyecto-beneficiario" ALTER COLUMN id_proyect_bene SET DEFAULT nextval('public."proyecto-beneficiario_id_proyect_bene_seq"'::regclass);
ALTER TABLE ONLY public.user_proyect ALTER COLUMN id_user_proyect SET DEFAULT nextval('public."user-proyect_id_user_proyect_seq"'::regclass);
ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);

ALTER TABLE ONLY public.beneficiario
    ADD CONSTRAINT beneficiario_pkey PRIMARY KEY (id_info_bene);

ALTER TABLE ONLY public.hito_indicador
    ADD CONSTRAINT hito_indicador_pkey PRIMARY KEY (id_hito);

ALTER TABLE ONLY public.indicador
    ADD CONSTRAINT indicador_pkey PRIMARY KEY (id_indicador);

ALTER TABLE ONLY public.infobeneficiario
    ADD CONSTRAINT infobeneficiario_pkey PRIMARY KEY (id_info);

ALTER TABLE ONLY public.objetivo_logico
    ADD CONSTRAINT objetivo_logico_pkey PRIMARY KEY (id_objetivo);

ALTER TABLE ONLY public."proyecto-beneficiario"
    ADD CONSTRAINT "proyecto-beneficiario_pkey" PRIMARY KEY (id_proyect_bene);

ALTER TABLE ONLY public.proyecto
    ADD CONSTRAINT proyecto_pkey PRIMARY KEY (id_proyecto);

ALTER TABLE ONLY public.user_proyect
    ADD CONSTRAINT "user-proyect_pkey" PRIMARY KEY (id_user_proyect);

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);

CREATE INDEX idx_hito_indicador_id_indicador ON public.hito_indicador USING btree (id_indicador);
CREATE INDEX idx_indicador_id_objetivo_logico ON public.indicador USING btree (id_objetivo_logico);
CREATE INDEX idx_objetivo_logico_id_proyecto ON public.objetivo_logico USING btree (id_proyecto);

ALTER TABLE ONLY public.beneficiario
    ADD CONSTRAINT fk_beneficiario_infobeneficiario FOREIGN KEY (id_info) REFERENCES public.infobeneficiario(id_info);

ALTER TABLE ONLY public.beneficiario
    ADD CONSTRAINT fk_beneficiario_proyectbene FOREIGN KEY (id_proyect_bene) REFERENCES public."proyecto-beneficiario"(id_proyect_bene);

ALTER TABLE ONLY public.hito_indicador
    ADD CONSTRAINT fk_hitoindicador_indicador FOREIGN KEY (id_indicador) REFERENCES public.indicador(id_indicador) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY public.indicador
    ADD CONSTRAINT fk_indicador_objetivo_logico FOREIGN KEY (id_objetivo_logico) REFERENCES public.objetivo_logico(id_objetivo) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public.objetivo_logico
    ADD CONSTRAINT fk_objetivo_padre FOREIGN KEY (id_objetivo_padre) REFERENCES public.objetivo_logico(id_objetivo) ON UPDATE CASCADE ON DELETE SET NULL;

ALTER TABLE ONLY public.objetivo_logico
    ADD CONSTRAINT fk_objetivo_proyecto FOREIGN KEY (id_proyecto) REFERENCES public.proyecto(id_proyecto) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."proyecto-beneficiario"
    ADD CONSTRAINT fk_proyectbene_infobeneficiario FOREIGN KEY (id_info_bene) REFERENCES public.infobeneficiario(id_info);

ALTER TABLE ONLY public."proyecto-beneficiario"
    ADD CONSTRAINT fk_proyectbene_proyecto FOREIGN KEY (id_proyecto) REFERENCES public.proyecto(id_proyecto);

ALTER TABLE ONLY public.user_proyect
    ADD CONSTRAINT fk_userproyect_proyecto FOREIGN KEY (id_proyecto) REFERENCES public.proyecto(id_proyecto);

ALTER TABLE ONLY public.user_proyect
    ADD CONSTRAINT fk_userproyect_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
